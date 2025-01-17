import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MaterialDoc(props) {
    const code = {
        basic: `
<Dropdown dropdownIcon={(options) => <img alt="dropdown icon" src="/icons/arrow_down.png" {...options.iconProps} />} />
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <a href="https://fonts.google.com/icons">Material icons</a> is the official icon library based on Google Material Design.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
