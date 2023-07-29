import {useModel} from '@@/exports';
import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router";
import TextArea from "antd/es/input/TextArea";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';// 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from 'rehype-raw'// 解析标签，支持html语法
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter' // 代码高亮
import {tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {Avatar, Button, Card, Col, message, Result, Row} from "antd";
import {
  genTextTaskAsyncAiRebuild,
  getTextTaskVOById, updateMyTextTask
} from "@/services/text/textController";
import Meta from "antd/es/card/Meta";
import {RedoOutlined} from "@ant-design/icons";
import ReactECharts from "echarts-for-react";

/**
 * 我的文本页面
 * @constructor
 */
const MyTextPageInfo: React.FC = () => {
  const {initialState} = useModel('@@initialState');
  const {currentUser} = initialState ?? {};
  const params = useParams();
  const [textTaskInfo, setTextTaskInfo] = useState<API.TextTaskVO>();
  const [textInfo, setTextInfo] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * 页面初始化
   */
  const loadData = async () => {
    try {
      const res = await getTextTaskVOById({
        id: params.id,
      });
      if (res.data) {
        setTextTaskInfo(res.data ?? []);
        if (res.data.status === "succeed"){
          setTextInfo(res.data.genTextContent)
        }
        // 隐藏图表的 title
      } else {
        message.error('获取我的图表失败');
      }
    } catch (e: any) {
      message.error('获取我的图表失败，' +e.response.data.message);
    }
  };
  /**
   * 钩子
   */
  useEffect(() => {
    loadData();
  }, []);
  /**
   * 保存文本
   */
  const saveText = async () =>{
    try {
      const res = await updateMyTextTask({
        id: params.id,
        genTextContent: textInfo
      });
      if (res.data) {
        message.success("保存成功")
        // 隐藏图表的 title
      } else {
        message.error('保存失败');
      }
    } catch (e: any) {
      message.error('保存失败，' +e.response.data.message);
    }

  }

  /**
   * 重新生成
   */
  const rebuild = async () => {
    setLoading(true);
    if (!params.id) {
      message.error("文本不存在");
      return;
    }
    try {
      const res = await genTextTaskAsyncAiRebuild({
        id: params.id,
      });
      if (!res?.data) {
        message.error('重新分析失败');
      } else {
        message.success('分析任务提交成功，稍后请在我的文本页面查看');
        history.back()
      }
    } catch (e: any) {
      message.error('分析失败，' +e.response.data.message);
    }
    setLoading(false);
  };

  /**
  双向绑定
   */
  const handleMdChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
    setTextInfo(e.target.value)
  };



  return (
    <div className="my-chart-page">
      <div className="margin-16"/>
      <Row gutter={24}>
        <Col span={12}>
          <Card style={{width: '100%'}}>
            <Meta
              avatar={<Avatar src={currentUser && currentUser.userAvatar}/>}
              title={textTaskInfo?.name}
              description={
                textTaskInfo?.status==='succeed'&&<>
                <Button type={"primary"} style={{margin:"5px",float:"right"}} onClick={saveText} icon={<RedoOutlined />}>保存</Button>
              </>
              }
            />
            <TextArea autoSize showCount value={textInfo} style={{margin:'5px',float:"right"}} onChange={handleMdChange} />
          </Card>
          {
          textTaskInfo?.status==='failed'&&<>
            <Button type={"primary"} style={{margin:"5px"}} onClick={rebuild} icon={<RedoOutlined />}>重新生成</Button>
          </>
         }
        </Col>
        <Col span={12}>
          <Card style={{width: '100%'}}>
            <Meta
              title="文本展示"
              description={textTaskInfo?.textType ? '文本类型：' + textTaskInfo?.textType : undefined}
            />
            <ReactMarkdown
              className='markdown-body'
              children={textInfo}
              remarkPlugins={[remarkGfm, { singleTilde: false }]}
              rehypePlugins={[rehypeRaw]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={tomorrow}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            />
            <>
            </>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default MyTextPageInfo;
