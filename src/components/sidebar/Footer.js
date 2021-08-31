import { Row, Col } from 'antd';
import './SideBar.css';

function CopyRightText() {
    return (
        <div className="text-footer">
            Copyright © 2021 Payment Monitoring All rights reserved.
        </div>
    );
}

function VersionText() {
    return (
        <div className="text-footer">
            Version 1.0.0
        </div>
    );
}

function FooterPayment() {
    return (
    <Row>
      <Col span={8}><CopyRightText /></Col>
      <Col span={2} offset={14}>
        <VersionText />
      </Col>
    </Row>
    );
}

export default FooterPayment;