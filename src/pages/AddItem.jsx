import React, { useState } from "react";
import { Form, Input, Button, Select, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
function AddItem(props) {
  const [componentSize, setComponentSize] = useState("default");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const onFormLayoutChange = (size) => {
    setComponentSize(size);
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Form
        style={{ marginTop: "50px" }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="商品类别：">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="商品名称：">
          <Input />
        </Form.Item>
        <Form.Item label="商品价格：">
          <Input />
        </Form.Item>
        <Form.Item label="商品图片">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          >
            {/* <img src="" alt="avatar" style={{ width: "100%" }} /> */}
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default AddItem;
