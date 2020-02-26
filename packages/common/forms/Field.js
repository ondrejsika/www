import React from "react";
import { Form } from "react-bootstrap";

const Field = props => {
  let name = props.name;
  let as = props.as;
  let label = props.label;
  let type = props.type || "text";
  let register = props.register;
  let errors = props.errors;
  let validation_required = props.validation_required;
  let validation_pattern = props.validation_pattern;
  let validation_pattern_message = props.validation_pattern_message;

  let validation = {};

  if (validation_required) {
    validation.required = validation_required;
  }

  if (validation_pattern) {
    validation.pattern = {
      value: validation_pattern,
      message: validation_pattern_message
    };
  }

  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as={as}
        type={type}
        name={name}
        isInvalid={errors[name]}
        placeholder={label}
        ref={register(validation)}
      >
        {props.children}
      </Form.Control>
      <Form.Text className="text-muted">
        {errors[name] && errors[name].message}
      </Form.Text>
    </Form.Group>
  );
};

export default Field;
