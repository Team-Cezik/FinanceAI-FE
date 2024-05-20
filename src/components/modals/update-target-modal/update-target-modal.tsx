import React from 'react'
import { Form, Modal, ModalProps, } from 'antd'
import FormLabel from '../../atomics/form-label/form-label'
import PrimaryButton from '../../atomics/primary-button/primary-button'
import { useTranslation } from 'react-i18next'
import FaiSelect from '../../atomics/fai-select/fai-select'
import { useAxiosServiceClient } from '../../../services/axios'
import { useAtom } from 'jotai'
import { loadingAtom, messageAtom, userInfoAtom } from '../../../store/global-atoms'
import TitleWithSubtitle from '../../atomics/title-with-subtitle/title-with-subtitle'

interface AddTargetModalProps extends ModalProps {
    id?: number;
    onSuccessAction?: () => void;
}

const UpdateTargetModal = (props: AddTargetModalProps) => {

    const { t } = useTranslation();
    const [loading] = useAtom(loadingAtom);
    const [userInfo] = useAtom(userInfoAtom);
    const [, setMessage] = useAtom(messageAtom);
    const { TargetApi } = useAxiosServiceClient();

    const onFinish = (values: { amount: number }) => {
        if (props.id && userInfo && userInfo.id) {
            let data = { id: props.id, amount: values.amount, userId: userInfo.id }
            TargetApi.Update(data).then((response) => {
                if (response.data.success) {
                    setMessage({
                        type: "success",
                        message: "Hedef Başarıyla Güncellendi"
                    })
                    props.onSuccessAction && props.onSuccessAction()
                }
            }).catch((err) => {
                console.log("err: ", err)
                setMessage({ type: "error", message: "err.data.message" })
            })

        }
    }


    return (
        <Modal {...props} footer={null}>
            <div className='sign-up-container'>
                <TitleWithSubtitle title='Hedefini Güncelle' subtitle='Daha iyi bir hedef mi belirleyeceksin? O halde hedeflerini güncelle!' />
                <Form layout='vertical' style={{ marginTop: "1.5rem" }} onFinish={onFinish}>
                    <FormLabel label={t('modals.add-target.target')}>
                        <Form.Item name={"amount"}>
                            <FaiSelect size='large' options={[
                                { value: 10, label: "10%" },
                                { value: 15, label: "15%" },
                                { value: 20, label: "20%" },
                                { value: 25, label: "25%" },
                            ]} />
                        </Form.Item>
                    </FormLabel>
                    <Form.Item>
                        <PrimaryButton loading={loading} htmlType='submit' buttontext={t('page-parts.auth-part.logIn')}></PrimaryButton>
                    </Form.Item>
                </Form>
            </div>
        </Modal>)
}

export default UpdateTargetModal