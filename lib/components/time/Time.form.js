import baseEditForm from '../_classes/component/Component.form';
import TimeEditData from './editForm/Time.edit.data';
import TimeEditDisplay from './editForm/Time.edit.display';
export default (...extend) => baseEditForm([
    {
        key: 'data',
        components: TimeEditData,
    },
    {
        key: 'display',
        components: TimeEditDisplay,
    },
], ...extend);