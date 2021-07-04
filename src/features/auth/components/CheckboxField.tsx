import { Text, Box, Checkbox, FormControl } from '@chakra-ui/react';
import { useField } from 'formik';
import { FC } from 'react';

type CheckboxFieldProps = {
  name: string;
};

export const CheckboxField: FC<CheckboxFieldProps> = ({ name, children }) => {
  const [field, meta] = useField({
    name,
    type: 'checkbox',
    checked: false,
  });
  return (
    <FormControl id={name}>
      <Checkbox
        {...field}
        name={name}
        type="checkbox"
        isInvalid={!!meta.error && meta.touched}
        textColor="gray.433"
      >
        {children}
      </Checkbox>
      <Box
        h={!!meta.error && meta.touched ? 8 : 2}
        transition="height 0.2s ease-out"
      >
        {!!meta.error && meta.touched && (
          <Text fontSize="sm" textColor="red.300" display="inline">
            {meta.error || 'Please accept the terms of service.'}
          </Text>
        )}
      </Box>
    </FormControl>
  );
};
