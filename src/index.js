import AppService from './modules/app.service';
import {config} from './modules/config';
import './modules/header.component';
import './css/index.css';
import './less/index.less';
import './scss/index.scss';

console.log('Config key:', config.key);

const service = new AppService('прЫвет мЫр!');
service.log();

console.log('привет мЫр!');
// console.log(css);

