module.exports = ({firstname,lastname,MaritalStatus,address,CityOfResidence,Nationality,email,dob,phone,study,graduate,employer,jobtitle,natureofbusiness,annual_income,investmentObjective})=>{
  const today = new Date()
  return `
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>PDF Result Template</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
      body {
        font-family: "Josefin Sans", sans-serif;
        font-style:normal;
      }
      .invoice-box {
        max-width: 800px;
        margin: auto;
        padding: 30px;
        border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        font-size: 16px;
        line-height: 24px;
        color: #555;
      }
      .margin-top {
        margin-top: 50px;
      }
      .justify-center {
        text-align: center;
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
      .invoice-box table tr td:nth-child(2) {
        text-align: right;
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
        font-weight: bold;
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
                    src="https://bankopeny.com/wp-content/uploads/2022/02/Bankopeny.png"
                    style="width: 100%; max-width: 156px"
                  />
                </td>
                <td>
                  <strong>Date of Invoice:</strong> ${`${today.getDate()}.
                  ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                  <br />
                  <strong>Email:</strong> ${`${email}`}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr class="information">
          <td colspan="2">
            <table>
              <tr>
                <td>
                  <strong>User name:</strong> ${`${firstname}`} ${`${lastname}`}
                </td>
                <td><strong> DOB:</strong> ${`${dob}`}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr class="heading">
          <td><strong>Personal Information</strong></td>
          <td></td>
        </tr>
        <tr class="item">
          <td>First Name:</td>
          <td>${`${firstname}`}</td>
        </tr>
        <tr class="item">
          <td>Last Name:</td>
          <td>${`${lastname}`}</td>
        </tr>
        <tr class="item">
          <td>Date of Birth:</td>
          <td>${`${dob}`}</td>
        </tr>
        <tr class="item">
          <td>Nationality(ies):</td>
          <td>${`${Nationality}`}</td>
        </tr>
        <tr class="item">
          <td>Address:</td>
          <td>${`${address}`}</td>
        </tr>
        <tr class="item">
          <td>Country and city of residence:</td>
          <td>${`${CityOfResidence}`}</td>
        </tr>
        <tr class="item">
          <td>Marital Status:</td>
          <td>${`${MaritalStatus}`}</td>
        </tr>
        <tr class="item">
          <td>Email:</td>
          <td>${`${email}`}</td>
        </tr>
        <tr class="item">
          <td>Contact Number:</td>
          <td>${`${phone}`}</td>
        </tr>
        <tr class="heading">
          <td><strong>Educational Background</strong></td>
          <td></td>
        </tr>
        <tr class="item">
          <td>Study:</td>
          <td>${`${study}`}</td>
        </tr>
        <tr class="item">
          <td>Graduation year:</td>
          <td>${`${graduate}`}</td>
        </tr>
        <tr class="heading">
          <td><strong>Employment Information</strong></td>
          <td></td>
        </tr>
        <tr class="item">
          <td>Actual Employer:</td>
          <td>${`${employer}`}</td>
        </tr>
        <tr class="item">
          <td>Job Title:</td>
          <td>${`${jobtitle}`}</td>
        </tr>
        <tr class="item">
          <td>Nature of business:</td>
          <td>${`${natureofbusiness}`}</td>
        </tr>
        <tr class="heading">
          <td><strong>Financial Information</strong></td>
          <td></td>
        </tr>
        <tr class="item">
          <td>Avg Annual Income:</td>
          <td>${`${annual_income}`}</td>
        </tr>
        <tr class="heading">
          <td><strong>Investment Objectives and Risk Profile</strong></td>
          <td></td>
        </tr>
        <tr class="item">
          <td>Investment Objective:</td>
          <td>${`${investmentObjective}`}</td>
        </tr>
      </table>
      <footer>
        <p class="justify-center">
          Invoice was created on ${`${today.getDate()}. ${today.getMonth() + 1}.
          ${today.getFullYear()}.`}
        </p>
      </footer>
    </div>
  </body>
</html>
  `

}