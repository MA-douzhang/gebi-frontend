import {LoadingOutlined, PlusOutlined, UploadOutlined} from "@ant-design/icons";


const {TextArea} = Input;
import {Helmet, history, useModel} from '@umijs/max';
import {
  Button, Card, Col,
  DatePicker,
  Form,
  Input, InputNumber,
  message, Row, Space,
  Upload, UploadFile, UploadProps
} from 'antd';
import React, {useEffect, useState} from 'react';
import {
  getCreditByUserId,
  getUserVOById, updateMyUser, updateUser

} from "@/services/user/userController";
import {signCredit} from "@/services/user/creditController";
import {} from "@/services/user/aliPayController";
import {request} from "@/app";


const UserEdit: React.FC = () => {
  const {initialState, setInitialState} = useModel('@@initialState');
  const {currentUser} = initialState ?? {};
  const [userInfo, setUserInfo] = useState<API.UserVO>();
  const [creditInfo, setCreditInfo] = useState<number>();
  const [amountInfo, setAmountInfo] = useState<number>(5);
  const initUserParams = {
    id: currentUser?.id
  };
  // @ts-ignore
  const [userInfoParams, setUserInfoParams] = useState<API.getUserVOByIdParams>({...initUserParams});
  const [submitting, setSubmitting] = useState<boolean>(false);

  const userInit = {
    userName: "admin"
  }

  /**
   * 获取用户完整信息
   */
  const loadData = async () => {
    try {
      const res = await getUserVOById(userInfoParams);
      creditTotal();
      if (res.data) {
        console.log("res", res.data)
        setUserInfo(res.data ?? userInit)
      } else {
        message.error('获取我的信息失败');
      }
    } catch (e: any) {
      message.error('获取我的信息失败，' +e.response.data.message);
    }
  };

  /**
   * 获取积分
   */
  const creditTotal = async () => {
    try {
      const res = await getCreditByUserId();
      if (res.data) {
        console.log("res", res.data)
        setCreditInfo(res.data ?? 0)
        console.log("user d", userInfo)
      } else {
        message.error('获取我的积分失败');
      }
    } catch (e: any) {
      message.error('获取我的积分失败，' +e.response.data.message);
    }
  };

  useEffect(() => {
    loadData()
    console.log("user", userInfo)
  }, [])

  /**
   * 提交
   * @param values
   */
  const onFinish = async (values: any) => {
    // 避免重复提交
    if (submitting) {
      return;
    }
    setSubmitting(true);
    // 对接后端，上传数据
    const params = {
      ...values,
      file: undefined,
    };
    try {
      const res = await updateMyUser(params);
      if (!res?.data) {
        message.error('更新失败');
      } else {
        message.success('更新成功');
        console.log(res.data)
      }
    } catch (e: any) {
      message.error('分析失败，' +e.response.data.message);
    }
    setSubmitting(false);
  };

  /**
   * 签到
   * @param values
   */
  const signDaily = async () => {

    setSubmitting(true);
    try {
      const res = await signCredit();
      if (!res?.data) {
        message.error('签到失败，今天已签到');
      } else {
        message.success('签到成功');
        console.log(res.data)
      }
    } catch (e: any) {
      message.error('签到失败，' +e.response.data.message);
    }
    setSubmitting(false);
  };
  /**
   * 充值金额
   * @param value
   */
  const onChange = (value: number) => {
    if (value === null){
      message.error('请输入正确金额');
      return
    }
    setAmountInfo(value)
  };
  /**
   * 充值
   * @param values
   */
  const payCredit = async () => {
    setSubmitting(true);
    if (amountInfo === undefined){
      message.error('请输入正确金额');
      return
    }
    window.open(request.baseURL+"/userApi/alipay/pay?subject=充值积分&totalAmount="+amountInfo)
    setSubmitting(false);
  };
  // @ts-ignore
  return (
    <>{userInfo != undefined &&
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} >
        <Col span={12}>
          <Card title={"个人信息"} >
            <Form name="updateUser" labelAlign="left" labelCol={{span: 4}}
                  wrapperCol={{span: 16}} id={"user"} initialValues={userInfo}
                  onFinish={onFinish}>
              <Form.Item name={"userName"} label="用户昵称">
                <Input/>
              </Form.Item>
              <Form.Item label="更新">
                <Button type="primary" htmlType="submit" loading={submitting} disabled={submitting}>
                  更新
                </Button>
              </Form.Item>
            </Form>
          </Card>

        </Col>
        <Col span={12}>
          <Card title={"头像"}>

          </Card>
        </Col>
        <Col span={12}>
          <Card title={"我的积分"}>
            <span>
              当前积分为：{creditInfo}
              <Button type={"primary"} onClick={signDaily} style={{left:'5px'}}  disabled={submitting}>每日签到</Button>
            </span>
          </Card>
        </Col>
        <Col span={12}>
          <Card title={"充值积分"}>
              充值金额：
              <InputNumber min={1} max={100} defaultValue={5} value={amountInfo} onChange={onChange} />
              <Button type={'primary'} danger onClick={payCredit} style={{left:'5px'}}  disabled={submitting}>充值</Button>
          </Card>
        </Col>
      </Row>
    }
    </>
  );
};
export default UserEdit;

