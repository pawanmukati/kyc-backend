module.exports = (
    firstname,
    lastname,
    dob,
    Nationality,
    CityOfResidence,
    MaritalStatus,
    email,
    phone
  ) => {
    const today = new Date();
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>HTML 5 Boilerplate</title>
          <link rel="stylesheet" href="style.css">
        </head>
        <body>
          <p>Date of Invoice : ${today.getDate()}. ${today.getMonth()+1}.${today.getFullYear()}.</p>
          <p>firstname : ${firstname}</p>
          <p>lastname : ${lastname}</p>
          <p>dob : ${dob}</p>
          <p>Nationality : ${Nationality}</p>
          <p>CityOfResidence : ${CityOfResidence}</p>
          <p>MaritalStatus : ${MaritalStatus}</p>
          <p>email : ${email}</p>
          <p>phone : ${phone}</p>
        </body>
      </html>
    `;
  };
  