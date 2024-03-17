import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

import { Formik, Form, ErrorMessage } from "formik";

import * as yup from "yup";

const SignUpPage = () => {
  const initialValue = {
    name: "",
    email: "",
    password: "",
    confirmation_password: "",
  };
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("invaild Email").required("Email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(4, "password should be between 4 and 8")
      .max(8, "password should be between 4 and 8"),
    confirmation_password: yup
      .string()
      .required("password must be confirmation")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="w-[90%]  mx-auto h-screen flex justify-center  items-center">
      <Card className="basis-2/5">
        <CardHeader className="w-full flex-row items-center justify-between">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription className="text-basic">
            Already have an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleBlur, handleChange, values, isSubmitting }) => (
              <Form className="">
                <Label htmlFor="name">Name</Label>
                <Input
                  className=""
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  type="text"
                  name="name"
                  id="name"
                />
                <ErrorMessage
                  component={"p"}
                  name="name"
                  className="text-sm text-danger"
                />
                <Label htmlFor="email">Email</Label>
                <Input
                  className=""
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  type="email"
                  name="email"
                  id="email"
                />
                <ErrorMessage
                  component={"p"}
                  name="email"
                  className="text-sm text-danger"
                />
                <Label htmlFor="password">Password</Label>
                <Input
                  className=""
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  type="password"
                  name="password"
                  id="password"
                />
                <ErrorMessage
                  component={"p"}
                  name="email"
                  className="text-sm text-danger"
                />
                <Label htmlFor="password">Confirmation_Password</Label>
                <Input
                  className=""
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmation_password}
                  type="password"
                  name="confirmation_password"
                  id="confirmation_password"
                />
                <ErrorMessage
                  component={"p"}
                  name="confirmation_password"
                  className="text-sm text-danger"
                />
                <Button
                  disabled={isSubmitting}
                  className="w-full bg-basic hover:bg-basic mt-4"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
