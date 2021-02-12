import React from 'react';
import { Link } from 'react-router-dom';
import "./headerPay.css"

function HeaderPay() {
    return (
        <div>
            <div className="headerPay">
                <img className="pay_logo" src="https://m.media-amazon.com/images/G/01/EPSMarketingJRubyWebsite/assets/mindstorms/amazonpay-logo-rgb_clr._CB1560911315_.svg"/>
                <div className="navPay">
                <Link><p className="navPay1">For businesses</p></Link>
                <Link><p className="navPay2">For shoppers</p></Link>
                <Link><p className="navPay3">How it works</p></Link>
                <Link><p className="navPay4">Insights</p></Link>
                <Link><p className="navPay5">Getting started</p></Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderPay
