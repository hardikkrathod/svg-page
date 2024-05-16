/* eslint-disable no-mixed-operators */
import './App.css';
import Nav from './Nav';
import { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload,Modal } from 'antd';
const { Dragger } = Upload;
function App() {
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    }

  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
<Nav />
    <main className='main'>
      <div className='main-body'>    <div className='h1-text'> Upload Files</div></div>
  
  <div className='upload'>
  <Dragger {...props}>

    <p className="ant-upload-drag-icon box-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single upload. Use only XML file.
    </p>

  </Dragger>


  </div>
    <button className='btn-rgb' onClick={showModal}>
    Hello
  </button>
  <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </main>
    </>
  );
}

export default App;
