
function InputName() {
    return (
        <div className='row-input'>
            <label id='caption'>
                Diminta Oleh
            </label>
            <label id='divider'>:</label>
            <input name='CustomerName' type='text'>
            </input>
        </div>
    )
}
function InputNeeds() {
    return (
        <div className='row-input'>
            <label id='caption'>
                Keperluan Payment
            </label>
            <label id='divider'>:</label>
            <input name='PaymentNeeds' type='text' placeholder='-Kebutuhan Payment-'>
            </input>
        </div>
    )
}
function InputDate() {
    return (
        <div className='row-input'>
            <label id='caption'>
                Tanggal Pembayaran Aktual
            </label>
            <label id='divider'>:</label>
            <input name='PaymentDate' type='date'>
            </input>
        </div>
    )
}
function InputAmount_Number() {
    return (
        <div className='row-input'>
            <label id='caption'>
                Jumlah Payment
            </label>
            <label id='divider'>:</label>
            <input name='AmountNumber' type='number'>
            </input>
        </div>
    )
}
function InputAmount_Text() {
    return (
        <div className='row-input'>
            <label id='caption'>
                Terbilang
            </label>
            <label id='divider'>:</label>
            <input name='AmountText' type='text'>
            </input>
        </div>
    )
}
function InputRecipient_Name() {
    return (
        <div className='row-input'>
            <label id='caption'>
                Nama Rek. / Penerima
            </label>
            <label id='divider'>:</label>
            <input name='RecipientNumber' type='text'>
            </input>
        </div>
    )
}
function InputRecipient_Number() {
    return (
        <div className='row-input'>
            <label id='caption'>
                No. Rekening Penerima
            </label>
            <label id='divider'>:</label>
            <input name='RecipientNumber' type='number'>
            </input>
        </div>
    )
}
function Form_InputPayment() {
    return (
        <div className='form-Payment'>
            <h1>Silahkan Isi Form Payment Request</h1>
            <InputName />
            <InputNeeds />
            <InputDate />
            <InputAmount_Number />
            <InputAmount_Text />
            <InputRecipient_Name />
            <InputRecipient_Number />
            <input type='submit' value='Submit Payment Request'></input>
        </div>
    )

}

ReactDOM.render(
    <Form_InputPayment />,
    document.getElementById('root')
);