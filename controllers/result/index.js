module.exports = ({
  student_Name,
  depositor_Name,
  installment,
  date_paid,
  Amount,
  description,
}) => {
  const today = new Date();
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Prove of Payment</title>
      <style>
        .invoice-box {
          max-width: 950px;
          margin: auto;
          padding: 30px;
          border: 1px solid #eee;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
          font-size: 16px;
          line-height: 24px;
          font-family: 'Helvetica Neue', 'Helvetica';
          color: #555;
        }
        .margin-top {
          margin-top: 50px;
        }
           .text-right {
          text-align: right;
        }
        .invoice-box table {
          width: 100%;
          line-height: inherit;
          text-align: left;
        }
        .invoice-box table td {
          padding: 5px;
          vertical-align: top;
        }
        .invoice-box table tr.top table td {
          padding-bottom: 20px;
        }
        .invoice-box table tr.top table td.title {
          font-size: 45px;
          line-height: 45px;
          color: #333;
        }
        .invoice-box table tr.information table td {
          padding-bottom: 40px;
        }
        .invoice-box table tr.heading td {
          background: #eee;
          border-bottom: 1px solid #ddd;
          font-weight: bold;
        }
        .invoice-box table tr.details td {
          padding-bottom: 20px;
        }
        .invoice-box table tr.item td {
          border-bottom: 1px solid #eee;
        }
        .invoice-box table tr.item.last td {
          border-bottom: none;
        }
        .invoice-box table tr.total td:nth-child(2) {
          border-top: 2px solid #eee;
          font-size: bold;
        }
        @media only screen and (max-width: 600px) {
          .invoice-box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
          }
          .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
          }
        }
      </style>
    </head>
    <body>
      <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
          <tr class="top">
            <td colspan="2">
              <table>
                <tr>
                  <td class="title">
                    <img
                      src="./IMG.png"
                      alt="school logo"
                      style="width: 100%; max-width: 156px;"
                    />
                  </td>
                  <td>
                    <h2 style="text-align: right;">
                      Date:  ${`${today.getDate()}. ${today.getMonth() + 1}.
                      ${today.getFullYear()}. `}
                    </h2>
                  </td>
  
                  <td></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr class="information">
            <td colspan="2">
              <table>
                <tr>
                  <td style="font-weight: bold;">
                    School: School name goes here
                    <br />
                    Address: School address goes here
                  </td>
                  <td style="font-weight: bold;" class="text-right">
                    Customer: ${student_Name}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <table cellpadding="0" cellspacing="0">
          <tr class="heading">
            <td>Description</td>
            <td>Depositor Name</td>
            <td>Date Paid</td>
            <td>Installment</td>
            <td>Amount</td>
          </tr>
          <tr class="item">
            <td>${description}</td>
            <td>${depositor_Name}</td>
            <td>${date_paid}</td>
            <td>${installment}</td>
            <td>${Amount}</td>
          </tr>
        </table>
        <br />
        <h1 class="text-right">Total: NGN ${Amount}</h1>
      </div>
    </body>
  </html>
  
    `;
};
