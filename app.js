const express = require("express");

const app = express();
app.use(express.json());

// let donations = [];

const donations = [
    {
        name: "Unnie",
        email: "unnie@gmail.com",
        amount: 300
    },
    {
        name: "Rahim",
        email: "rahim@gmail.com",
        amount: 500
    },
    {
        name: "Karim",
        email: "karim@gmail.com",
        amount: 200
    }
];

app.get("/", (req, res) => {

    let output = "<h2>Donation List</h2>";

    donations.forEach(d => {
        output += `
      <p>
      <b>Name:</b> ${d.name} <br>
      <b>Email:</b> ${d.email} <br>
      <b>Amount:</b> ${d.amount} BDT
      </p>
      <hr>
    `;
    });

    res.send(output);
});

// homepage
app.get("/", (req, res) => {
    res.send("Donation Server Running");
});


// donate endpoint
app.post("/donate", (req, res) => {

    const { name, amount } = req.body;

    if (!name || !amount) {
        return res.json({
            success: false,
            message: "Name and amount required"
        });
    }


    const transactionId = "BKASH-" + Math.floor(Math.random() * 1000000);

    const donation = {
        name: name,
        amount: amount,
        transactionId: transactionId,
        method: "bKash ",
        date: new Date()
    };

    donations.push(donation);

    // notification simulation
    console.log("🔔 New Donation Received");
    console.log(`Donor: ${name}`);
    console.log(`Amount: ${amount} BDT`);
    console.log(`Transaction: ${transactionId}`);

    res.json({
        success: true,
        message: "Donation Successful 🎉",
        notification: `Thank you ${name} for donating ${amount} BDT`,
        transactionId: transactionId
    });

});


app.get("/donations", (req, res) => {
    res.json(donations);
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});