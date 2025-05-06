"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Img } from "../layout/Img";
import { Button } from "../layout/Button";

const formSchema = z.object({
  category: z.enum(["organization", "individual"], {
    message: "Please select a category.",
  }),
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
  message: z.string().optional(),
});

export default function EnquiryForm() {
  // Define form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "organization",
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  // Handle form submission
  function onSubmit(values) {
    console.log("Form submitted:", values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-wrap -mx-[2px] lg:-mx-[4px]"
      >
        <div className="w-full p-[2px] lg:p-[4px] mb-[15px] xl:mb-[20px] 3xl:mb-[30px]">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row gap-[15px] lg:gap-[30px]"
                  >
                    <FormItem className="flex items-center">
                      <FormControl>
                        <RadioGroupItem value="organization" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Organization
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center">
                      <FormControl>
                        <RadioGroupItem value="individual" />
                      </FormControl>
                      <FormLabel className="font-normal">Individual</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full lg:w-1/2 p-[2px] lg:p-[4px]">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-black bg-white border-gray-200"
                    type="text"
                    placeholder="Full Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full lg:w-1/2 p-[2px] lg:p-[4px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-black bg-white border-gray-200"
                    type="email"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full p-[2px] lg:p-[4px]">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-black bg-white border-gray-200"
                    type="tel"
                    placeholder="Phone Number"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full p-[2px] lg:p-[4px]">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="text-black bg-white border-gray-200"
                    placeholder="Message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full p-[2px] lg:p-[4px]">
          <Button
            type="submit"
            rightIcon={
              <Img
                src="icon-enquiry-btn.svg"
                alt="Fi 16182723"
                width={18}
                height={18}
                className="w-[10px] xl:w-[12px] 3xl:w-[16px] object-contain block"
              />
            }
            color="base1"
            className="max-w-[120px] sm:max-w-[140px] xl:max-w-[160px] 3xl:max-w-[204px] mx-auto lg:mr-0 mt-[15px] xl:mt-[20px] 3xl:mt-[30px]"
          >
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
}
