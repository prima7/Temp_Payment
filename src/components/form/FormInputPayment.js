import { Form, Input, Button, DatePicker, Divider } from 'antd';
import moment from 'moment';
import { SendOutlined } from '@ant-design/icons';
import './styleFormPayment.css';

const { TextArea } = Input;
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 10 },
};
const layoutbutton = {
    wrapperCol: { span: 14 },
}
const myDateFormat = ["DD/MM/YYYY"]

function Form_Request() {
    return (
        <Form {...layout} name="Form_Fill_Request" size="large">
            <Form.Item
                name="CustomerName"
                label="Diminta Oleh"
            >
                <Input
                    placeholder="Nama Customer"
                />
            </Form.Item>
            <Form.Item
                name="PaymentReason"
                label="Keperluan Payment"
                rules={[
                    {
                        required: true,
                        message: 'Keperluan Payment Wajib Di Isi!',
                    },
                ]}
            >
                <Input
                    placeholder="Kebutuhan Payment"
                />
            </Form.Item>
            <Form.Item
                name="PaymentDate"
                label="Tanggal Pembayaran Aktual"
            >
                <DatePicker
                    defaultValue={moment()}
                    format={myDateFormat}
                />
            </Form.Item>
            <Form.Item
                name="AmountNumber"
                label="Jumlah Payment"
            >
                <Input
                    type="number"
                    prefix="Rp."
                />
            </Form.Item>
            <Form.Item
                name="AmountText"
                label="Terbilang"
            >
                <TextArea
                    autoSize={{ minRows: 2 }}
                />
            </Form.Item>
            <Form.Item
                name="RecipientName"
                label="Nama Rekening / Penerima"
            >
                <Input
                    placeholder="Nama Penerima"
                />
            </Form.Item>
            <Form.Item
                name="RecipientAccount"
                label="No. Rekening Penerima"
            >
                <Input
                    placeholder="No. Rekening Penerima"
                />
            </Form.Item>
            <Form.Item
                wrapperCol={{ ...layoutbutton.wrapperCol }}
            >
                <Button type="primary" htmlType="submit">
                    Submit Payment Request
                    < SendOutlined />
                </Button>
            </Form.Item>
        </Form >
    );
};

function FormInputPayment() {
    return (
        <div>
            <Divider orientation="left"><h1>Silahkan Isi Form Payment Request</h1></Divider>
            <Form_Request />
        </div>
    );
}

export default FormInputPayment;