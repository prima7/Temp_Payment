function InputName() {
    return (
        <div className="row-input">
            <label id="caption">Diminta Oleh</label>
            <label id="divider">:</label>
            <input id="CustomerName" type="text"></input>
        </div>
    );
}
function InputNeeds() {
    return (
        <div className="row-input">
            <label id="caption">Keperluan Payment</label>
            <label id="divider">:</label>
            <input
                id="PaymentNeeds"
                type="text"
                placeholder="-Kebutuhan Payment-"
            ></input>
        </div>
    );
}
function InputDate() {
    return (
        <div className="row-input">
            <label id="caption">Tanggal Pembayaran Aktual</label>
            <label id="divider">:</label>
            <input id="PaymentDate" type="date"></input>
        </div>
    );
}
function InputAmountNumber() {
    return (
        <div className="row-input">
            <label id="caption">Jumlah Payment</label>
            <label id="divider">:</label>
            <input id="AmountNumber" type="number"></input>
        </div>
    );
}
function InputAmountText() {
    return (
        <div className="row-input">
            <label id="caption">Terbilang</label>
            <label id="divider">:</label>
            <input id="AmountText" type="text"></input>
        </div>
    );
}
function InputRecipientName() {
    return (
        <div className="row-input">
            <label id="caption">Nama Rek. / Penerima</label>
            <label id="divider">:</label>
            <input id="RecipientNumber" type="text"></input>
        </div>
    );
}
function InputRecipientNumber() {
    return (
        <div className="row-input">
            <label id="caption">No. Rekening Penerima</label>
            <label id="divider">:</label>
            <input id="RecipientNumber" type="number"></input>
        </div>
    );
}
function FormInputPayment() {
    return (
        <div className="form-Payment">
            <h1>Silahkan Isi Form Payment Request</h1>
            <InputName />
            <InputNeeds />
            <InputDate />
            <InputAmountNumber />
            <InputAmountText />
            <InputRecipientName />
            <InputRecipientNumber />
            <input type="submit" value="Submit Payment Request"></input>
        </div>
    );
}

export default FormInputPayment;