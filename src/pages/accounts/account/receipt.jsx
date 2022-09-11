import Link from 'next/link';
import React from 'react';
import AccountLayout from '../../../layouts/account';

const Receipt = () => {
    return (
        <AccountLayout
            heading={"Квитанции"}
        >
            <div className="receipt">
                <table>
                    <tr>
                        <th>Дата</th>
                        <th>Номер заказа</th>
                        <th>Цена</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>10.09.21</td>
                        <td>1598406809344109-1-1</td>
                        <td>0 USD</td>
                        <td><Link href="/"><a>Посмотреть сведения</a></Link></td>
                    </tr>
                </table>
            </div>
        </AccountLayout>

    )
}

export default Receipt;