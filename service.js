import { LightningElement,api } from 'lwc';

export default class BuyFlowAlert extends LightningElement {
    @api message;
    @api variant;
    handleClose(event) {
        const data = {
            detail : {
                close : true,
            }
        }
        this.fireEvent('close',data);
    }
    fireEvent(eventName, data) {
        const custEvent = new CustomEvent(eventName,data);
        this.dispatchEvent(custEvent);
    }

}