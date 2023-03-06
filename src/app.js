
import express from 'express'
import {ProductManager} from './productManager.js'

const app = express();

    app.get('/products', async (req, res) => {
       
        const productsList =  await products.loadFile();
        const queryParamsText = req.query;
            if(!queryParamsText){
                res.send(productsList)
            } else {
                const limite = Object.values(queryParamsText);
                res.send(productsList.slice(0, limite))
            }
     })

    app.get('/products/:pid', async (req, res) => {
        
        const productsList = await products.loadFile()
        const reqParamsText = req.params;
        const pid = Object.values(reqParamsText);
        
        const found = productsList.find(i => i.id == pid)
        if (found){
            res.send(found)
        } else {
            res.json({"Error" : 'Product not found'})
        }
    })     
    

const server = app.listen(8080, () => console.log('server started') )
console.log(server)

const products = new ProductManager('./src/products.txt');