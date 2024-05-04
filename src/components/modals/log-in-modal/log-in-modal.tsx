import React from 'react'
import './log-in-modal.css'
import { Form, Modal, ModalProps, Space } from 'antd'
import FaiInput from '../../atomics/fai-input/fai-input'
import PrimaryButton from '../../atomics/primary-button/primary-button'
import { useAxiosServiceClient } from '../../../services/axios'


interface LogInModalProps extends ModalProps { }

const LogInModal = (props: LogInModalProps) => {

    const {AuthApi} = useAxiosServiceClient();

    const onFinish = async (values: any) => {
        await AuthApi.LogIn(values).then((resp)=>console.log("resp: ",resp)).catch((err)=>console.log("err: ",err))
    }

    return (
        <Modal {...props} footer={null} >
            <div className='sign-up-container'>
                <Space direction='vertical'>
                    <span className='title'>Sign Up</span>
                    <span className='subTitle'>Please enter your info</span>
                </Space>
                <Form layout='vertical' style={{ marginTop: "1.5rem" }} onFinish={onFinish}>
                    <Form.Item label="Kullanıcı Adı" name={"username"}>
                        <FaiInput size='large' />
                    </Form.Item>
                    <Form.Item label="Şifre" name={"password"}>
                        <FaiInput size='large' />
                    </Form.Item>
                    <Form.Item>
                        <PrimaryButton htmlType='submit' buttonText='Giriş Yap'></PrimaryButton>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}

export default LogInModal