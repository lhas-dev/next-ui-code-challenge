import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { useForm } from "react-hook-form";

interface AddUserFormProps {
  onAdd: (data: any) => void;
}

const AddUserForm = ({ onAdd }: AddUserFormProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    onOpenChange();
    onAdd(data);
    // reset();
  };

  const isInvalid = !isValid;

  return (
    <>
      <Button className="mt-2" onPress={onOpen}>
        Add User
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add New User
              </ModalHeader>
              <ModalBody>
                <Input
                  className="mb-2"
                  errorMessage={String(errors.name?.message)}
                  isInvalid={!!errors.name}
                  label="Name"
                  type="text"
                  {...register("name", {
                    required: { message: "The name is required.", value: true },
                  })}
                />
                <Input
                  className="mb-2"
                  errorMessage={String(errors.email?.message)}
                  isInvalid={!!errors.email}
                  label="E-mail"
                  type="email"
                  {...register("email", {
                    required: {
                      message: "The email is required.",
                      value: true,
                    },
                  })}
                />
                <Input
                  className="mb-2"
                  errorMessage={String(errors.city?.message)}
                  isInvalid={!!errors.city}
                  label="City"
                  type="text"
                  {...register("city", {
                    required: {
                      message: "The city is required.",
                      value: true,
                    },
                  })}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  disabled={isInvalid}
                  type="submit"
                  onPress={() => handleSubmit(onSubmit)()}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddUserForm;
