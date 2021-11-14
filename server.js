import express from 'express';
import qrcode from 'qrcode';

const server = express();

server.use(express.json());

const report = {
    user: 'Abraham Mitiku',
    id: '123dedrE',
    result: 'Negative'
}
server.get('/', (req, res)=>{
    qrcode.toDataURL(report.toString()).then(url=>{
        res.json({qrcode: url})
    }).catch(err =>{
        res.status(500).json({message: err.message})
    });

})

server.get('/report', (req, res)=>{
    qrcode.toDataURL('https://google.com', (err, string)=>{
        if(err) res.json({message: err.message});
        else{
            res.json({report: string})
        }
    })
})


server.listen(4000, 'localhost',()=>{
    console.log(`listening on port: ${4000}`);
});