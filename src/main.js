import modals from "./modules/modals";
import timer from './modules/timer';
import tabs from './modules/tabs';

let deadline = '2024-08-29';
modals();
timer(deadline);
tabs('.glazing_slider', '.glazing_blok', '.glazing_content', 'active');
tabs('.decoration_slider', '.no_click', '.decoration_contend > div > div', 'after-click')