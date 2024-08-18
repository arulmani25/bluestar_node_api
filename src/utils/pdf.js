const fs = require('fs');
const pdf = require('html-pdf');
const path = require('path');

async function generatePDF() {
    return new Promise((resolve, reject) => {
        const template = `<!DOCTYPE html>
    <html>
    <head>
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #f2f2f2;
            }
            .invoice-table th {
                width: 40%;
            }
        </style>
    </head>
    <body>
    <title>Boom</title>
        <table class="invoice-table">
            <caption>Guest Details</caption>
            <tr>
                <th>Guest Name</th>
                <td> ${''}</td>
            </tr>
        </table>
    </body>
    </html>
    `;
        const outputPath = path.join(__dirname, '../../upload');
        pdf.create(template, { format: 'Letter' }).toFile(outputPath + `/${Date.now()}.pdf`, (err, res) => {
            console.log('=====err, res', err, res);
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

module.exports = { generatePDF };
