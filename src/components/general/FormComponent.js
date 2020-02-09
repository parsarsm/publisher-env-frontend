import React from "react";

class FormComponent extends React.PureComponent {
    state = {};

    onFormInput(name) {
        return (e) => {
            const value = e.target.value;
            this.setState({
                form: {
                    ...(this.form || []), [name]: value
                }
            });
        }
    }
}

export default FormComponent;