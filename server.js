const express = require ('express')
const app = express ()
const cors =require('cors')
const { response } = require('express')
const PORT = 8000

const speechTerms = {
'ccc':{
    'standsFor': 'certificate of clinical competence',
    'description':''
},
'mdtp':{
    'standsFor': 'Mcneil Dysphagia Therapy Program',
    'description':''
},

'unknown':{
    'standsFor':'unknown',
    'description':'unknown'
    
}
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('api/:name', (request,response)=>{
    const terms = request.params.name.toLowerCase()
    if (speechTerms[terms] ){
        response.json(speechTerms[terms])
    } else {
        response.json(speechTerms['unknown'])
    }
})

app.listen(process.env.PORT || PORT ,()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})