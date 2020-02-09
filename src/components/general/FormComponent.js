import React from "react";

class FormComponent extends React.PureComponent {
    state = {
        form: {},
    };

    onFormInput(name) {
        return (e) => {
            const value = e.target.value;
            this.setState({
                form: {
                    ...(this.state.form || []), [name]: value
                }
            });
        }
    }

}

export default FormComponent;