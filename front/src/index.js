import './styles/style.css';
import './images/url-logo.png';

import { starter, indexStarter, analyticsStarter } from '../scripts/services/dom';

starter();

if(location.href.endsWith('analytics/')) {
    //domain/analytics
    console.log('endsWith(analytics/)')
    analyticsStarter();
} else {
    //Default: domain/
    console.log('endsWith(/)')
    indexStarter();
}
