import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState:{
        products:[{
            name: 'dva', id: '1'
        },{
            name: 'dva1', id: '2'
        }],
        param:[{
            name: '123', id: '1', key: '1'
        },{
            name: '123', id: '2', key: '2'
        },{
            name: '123', id: '3', key: '3'
        },{
            name: '123', id: '4', key: '4'
        }]
    }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

app.model(require('./models/products').default);
app.model(require('./models/param').default);

// 5. Start
app.start('#root');
