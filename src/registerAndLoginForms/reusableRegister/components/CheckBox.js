import { ErrorMessage, Field } from "formik";
import React from "react";

function CheckBox(props) {
    let { name, options } = props;

    return (
        <div>
          <Field name={name}>
            {({ field }) => {
              return options.map((option) => {
                return (
                  <div key={option.key}>
                    <input
                      {...field}
                      type="checkbox"
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <label>{option.value}</label>
                  </div>
                );
              });
            }}
          </Field>
          <ErrorMessage name={name} />
        </div>
      );
}

export default CheckBox;
