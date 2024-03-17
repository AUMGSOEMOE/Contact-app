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

const SignInPage = () => {
  const initialValue = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup.string().email("invaild Email").required("Email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(4, "password should be between 4 and 8")
      .max(8, "password should be between 4 and 8"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="w-[90%]  mx-auto h-screen flex justify-center  items-center">
      <Card className="w-1/4  ">
        <CardHeader className="w-full flex-row items-center justify-between">
          <CardTitle>Sign In</CardTitle>
          <CardDescription className="text-basic">
            I don't have an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleBlur, handleChange, values, isSubmitting }) => (
              <Form className="">
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
                <Button
                  disabled={isSubmitting}
                  className="w-full bg-basic hover:bg-basic mt-4"
                  type="submit"
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
