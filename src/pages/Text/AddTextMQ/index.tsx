import { UploadOutlined } from '@ant-design/icons';
import {Button, Card, Col, Divider, Form, Input, message, Row, Select, Space, Spin, Upload} from 'antd';
import React, { useState } from 'react';
import {
  genTextTaskAsyncAiMq

} from "@/services/text/textController";
import {useForm} from "antd/es/form/Form";
/**
 * 添加文本（异步）页面
 * @constructor
 */
const AddTextMQ: React.FC = () => {
  const [form] = useForm();
  const [submitting, setSubmitting] = useState<boolean>(false);

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
      const res = await  genTextTaskAsyncAiMq(params, {}, values.file.file.originFileObj);
      if (res?.status === 500) {
        message.error('分析失败');
      } else {
        message.success('分析任务提交成功，稍后请在我的文本页面查看');
        form.resetFields();
      }
    } catch (e: any) {
      message.error('分析失败，' + e.response.data.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="add-text-async">
      <Card title="智能转换文本">
        <Form form={form} name="addText" labelAlign="left" labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }} onFinish={onFinish} initialValues={{}}>
          <Form.Item name="name"
                     label="文本名称"
                     rules={[{ required: true, message: '请输入转换笔记名' }]}
          >
            <Input placeholder="请输入文本名称" />

          </Form.Item>
          <Form.Item name="textType" label="文本类型"  rules={[{ required: true, message: '类型不能为空' }]}>
            <Select
              options={[
                { value: 'markdown', label: 'markdown格式' },
                { value: 'null', label: '正在开发中' },
              ]}
            />
          </Form.Item>
          <Form.Item name="file" label="原始数据"  rules={[{ required: true, message: '笔记不能为空' }]}>
            <Upload name="file" maxCount={1}>
              <Button icon={<UploadOutlined />}>上传 TXT 文件</Button>
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16, offset: 4 }}>
            <Space>
              <Button type="primary" htmlType="submit" loading={submitting} disabled={submitting}>
                提交
              </Button>
              <Button htmlType="reset">重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default AddTextMQ;
