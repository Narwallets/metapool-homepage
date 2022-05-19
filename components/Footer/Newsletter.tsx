import { Stack, Text, FormControl, Input, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import useSubscribeToNewsletter from "../../hooks/useSubscribeToNewsletter";

const Newsletter = () => {
  const { subscribe, isLoading, isSuccess } = useSubscribeToNewsletter();

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Please enter a valid email").required("Required"),
    }),
    onSubmit: async (values) => {
      const { email } = values;
      subscribe(email, {
        onSuccess: (res: any) => {
          formik.setFieldError("email", undefined);
        },
        onError: (e: any) => {
          formik.setFieldError("email", "The email was already subscribed");
        },
      });
    },
  });

  return (
    <Stack align={"flex-start"}>
      <Stack direction={"column"}>
        <Text>Newsletter</Text>
        <form onSubmit={formik.handleSubmit}>
          <Stack direction={{ base: "column", xl: "row" }}>
            <FormControl isInvalid={!formik.isValid}>
              <Input
                placeholder={"Your email address"}
                bg={"blackAlpha.100"}
                border={"1px solid white"}
                rounded="4px"
                py="25px"
                _focus={{
                  bg: "whiteAlpha.300",
                }}
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                disabled={isSuccess || isLoading}
              />
            </FormControl>

            <Button
              rightIcon={isSuccess ? <CheckIcon color="green" /> : undefined}
              type="submit"
              variant="outline"
              rounded="4px"
              color="white"
              isLoading={isLoading}
              disabled={isSuccess || isLoading}
            >
              {isSuccess ? "Suscribed" : "Suscribe"}
            </Button>
          </Stack>

          {formik.errors.email && formik.touched.email ? (
            <Text color="red.400" my="1rem">
              {formik.errors.email}
            </Text>
          ) : null}
        </form>
      </Stack>
    </Stack>
  );
};

export default Newsletter;
