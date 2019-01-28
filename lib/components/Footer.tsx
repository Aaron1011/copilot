import * as etch from 'etch';
import { EtchComponent } from './EtchComponent';

export class Footer extends EtchComponent {
    constructor(props: JSX.Props) {
        super(props);
        etch.initialize(this);
    }

    render(): JSX.Element {
        return (
            <div class="copilot-footer">
                <img src="atom://copilot/images/logo-white.svg" class="copilot-brand" /> 
            </div>
        );
    }
}