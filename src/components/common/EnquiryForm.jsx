"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Img } from "../layout/Img";
import { Button } from "../layout/Button";

const formSchema = z
  .object({
    category: z.enum(["organization", "individual"], {
      message: "Please select a category.",
    }),
    organization: z.string().optional(),
    fullName: z.string().optional(),
    email: z.string().email({ message: "Invalid email address." }),
    phoneNumber: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits." })
      .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
    message: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.category === "organization") {
      if (!data.organization || data.organization.length < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Organization name must be at least 2 characters.",
          path: ["organization"],
        });
      }
    } else if (data.category === "individual") {
      if (!data.fullName || data.fullName.length < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Full name must be at least 2 characters.",
          path: ["fullName"],
        });
      }
    }
  }); 

export default function EnquiryForm() {
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Define form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "organization",
      organization: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  // Watch category to conditionally render fields
  const category = form.watch("category");

  // Handle form submission
  async function onSubmit(values) {
    console.log("Form submission triggered with values:", values);
    try {
      setStatus("submitting");
      setErrorMessage(null);

      console.log("Sending fetch request to /api/send-email");
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("API response status:", response.status);

      const result = await response.json();
      if (response.ok) {
        console.log("Email sent successfully:", result);
        setStatus("success");
        form.reset();
      } else {
        console.error("API error:", result.message);
        setStatus("error");
        if (response.status === 404) {
          setErrorMessage("API endpoint not found. Please check server configuration.");
        } else if (response.status === 405) {
          setErrorMessage("Method not allowed. Please contact support.");
        } else {
          setErrorMessage(result.message || "Failed to send email.");
        }
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
      setErrorMessage("Network error or server is unreachable.");
    }
  }

  // Log form errors for debugging
  const errors = form.formState.errors;
  if (Object.keys(errors).length > 0) {
    console.log("Form validation errors:", errors);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          console.log("Form submit event triggered");
          form.handleSubmit(onSubmit)(e);
        }}
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
                    onValueChange={(value) => {
                      field.onChange(value);
                      // Reset and clear errors for the non-relevant field
                      if (value === "organization") {
                        form.setValue("fullName", "");
                        form.clearErrors("fullName");
                      } else {
                        form.setValue("organization", "");
                        form.clearErrors("organization");
                      }
                    }}
                    defaultValue={field.value}
                    className="flex flex-row gap-[15px] lg:gap-[30px]"
                  >
                    <FormItem className="flex items-center">
                      <FormControl>
                        <RadioGroupItem value="organization" />
                      </FormControl>
                      <FormLabel className="font-normal">Organization</FormLabel>
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
          {category === "organization" ? (
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-black bg-white border-gray-200"
                      type="text"
                      placeholder="Organization Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="text-black bg-white border-gray-200" type="text" placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <div className="w-full lg:w-1/2 p-[2px] lg:p-[4px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="text-black bg-white border-gray-200" type="email" placeholder="Email" {...field} />
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
                  <Textarea className="text-black bg-white border-gray-200" placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full p-[2px] lg:p-[4px]">
          {status === "success" && <p className="text-green-600">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-600">{errorMessage || "Failed to send message. Please try again."}</p>}
          {Object.keys(errors).length > 0 && <p className="text-red-600">Please fix the form errors before submitting.</p>}
          <Button
            type="submit"
            disabled={status === "submitting"}
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
            {status === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useState } from "react";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Img } from "../layout/Img";
// import { Button } from "../layout/Button";

// const formSchema = z
//   .object({
//     category: z.enum(["organization", "individual"], {
//       message: "Please select a category.",
//     }),
//     organization: z
//       .string()
//       .min(2, {
//         message: "Organization name must be at least 2 characters.",
//       })
//       .optional(),
//     fullName: z
//       .string()
//       .min(2, {
//         message: "Full name must be at least 2 characters.",
//       })
//       .optional(),
//     email: z.string().email({ message: "Invalid email address." }),
//     phoneNumber: z
//       .string()
//       .min(10, { message: "Phone number must be at least 10 digits." })
//       .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
//     message: z.string().optional(),
//   })
//   .refine(
//     (data) => {
//       if (data.category === "organization") {
//         return !!data.organization;
//       }
//       return !!data.fullName;
//     },
//     {
//       message: "Please provide an organization name or full name.",
//       path: ["organization", "fullName"],
//     }
//   );

// export default function EnquiryForm() {
//   const [status, setStatus] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);

//   // Define form
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       category: "organization",
//       organization: "",
//       fullName: "",
//       email: "",
//       phoneNumber: "",
//       message: "",
//     },
//   });

//   // Watch category to conditionally render fields
//   const category = form.watch("category");

//   // Handle form submission
//   async function onSubmit(values) {
//     console.log("Form submission triggered with values:", values);
//     try {
//       setStatus("submitting");
//       setErrorMessage(null);

//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });

//       console.log("API response status:", response.status);

//       const result = await response.json();
//       if (response.ok) {
//         console.log("Email sent successfully:", result);
//         setStatus("success");
//         form.reset();
//       } else {
//         console.error("API error:", result.message);
//         setStatus("error");
//         setErrorMessage(result.message || "Failed to send email.");
//       }
//     } catch (error) {
//       console.error("Submission failed:", error);
//       setStatus("error");
//       setErrorMessage("Network error or server is unreachable.");
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap -mx-[2px] lg:-mx-[4px]">
//         <div className="w-full p-[2px] lg:p-[4px] mb-[15px] xl:mb-[20px] 3xl:mb-[30px]">
//           <FormField
//             control={form.control}
//             name="category"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <RadioGroup
//                     onValueChange={(value) => {
//                       field.onChange(value);
//                       // Reset the other field when category changes
//                       form.setValue("organization", "");
//                       form.setValue("fullName", "");
//                     }}
//                     defaultValue={field.value}
//                     className="flex flex-row gap-[15px] lg:gap-[30px]"
//                   >
//                     <FormItem className="flex items-center">
//                       <FormControl>
//                         <RadioGroupItem value="organization" />
//                       </FormControl>
//                       <FormLabel className="font-normal">Organization</FormLabel>
//                     </FormItem>
//                     <FormItem className="flex items-center">
//                       <FormControl>
//                         <RadioGroupItem value="individual" />
//                       </FormControl>
//                       <FormLabel className="font-normal">Individual</FormLabel>
//                     </FormItem>
//                   </RadioGroup>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full lg:w-1/2 p-[2px] lg:p-[4px]">
//           {category === "organization" ? (
//             <FormField
//               control={form.control}
//               name="organization"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input
//                       className="text-black bg-white border-gray-200"
//                       type="text"
//                       placeholder="Organization Name"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           ) : (
//             <FormField
//               control={form.control}
//               name="fullName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input className="text-black bg-white border-gray-200" type="text" placeholder="Full Name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           )}
//         </div>
//         <div className="w-full lg:w-1/2 p-[2px] lg:p-[4px]">
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input className="text-black bg-white border-gray-200" type="email" placeholder="Email" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full p-[2px] lg:p-[4px]">
//           <FormField
//             control={form.control}
//             name="phoneNumber"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     className="text-black bg-white border-gray-200"
//                     type="tel"
//                     placeholder="Phone Number"
//                     {...field}
//                     onChange={(e) => field.onChange(e.target.value)}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full p-[2px] lg:p-[4px]">
//           <FormField
//             control={form.control}
//             name="message"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Textarea className="text-black bg-white border-gray-200" placeholder="Message" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full p-[2px] lg:p-[4px]">
//           {status === "success" && <p className="text-green-600">Message sent successfully!</p>}
//           {status === "error" && <p className="text-red-600">{errorMessage || "Failed to send message. Please try again."}</p>}
//           <Button
//             type="submit"
//             disabled={status === "submitting"}
//             rightIcon={
//               <Img
//                 src="icon-enquiry-btn.svg"
//                 alt="Fi 16182723"
//                 width={18}
//                 height={18}
//                 className="w-[10px] xl:w-[12px] 3xl:w-[16px] object-contain block"
//               />
//             }
//             color="base1"
//             className="max-w-[120px] sm:max-w-[140px] xl:max-w-[160px] 3xl:max-w-[204px] mx-auto lg:mr-0 mt-[15px] xl:mt-[20px] 3xl:mt-[30px]"
//           >
//             {status === "submitting" ? "Sending..." : "Send Message"}
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// }
// //
