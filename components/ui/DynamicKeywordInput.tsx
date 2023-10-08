import React, { MouseEvent } from "react";
import { Form, Input } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { formItemLayout, formItemLayoutWithOutLabel } from "@/config/form";

const DynamicKeywordInput = () => (
  <Form.List
    name="keywords"
    rules={[
      {
        validator: async (_, keywords) => {
          if (!keywords || keywords.length < 1) {
            return Promise.reject(new Error("Please add at least one keyword"));
          }
        },
      },
    ]}
  >
    {(fields, { add, remove }) => (
      <>
        {fields.map(({ key, ...field }, index) => (
          <Form.Item
            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
            label={
              index === 0 ? (
                <span style={{ fontWeight: "bold" }}>Keywords</span>
              ) : (
                ""
              )
            }
            extra={
              index === 0 ? "Enter up to 5 keywords you want to rank on" : ""
            }
            required={false}
            key={key}
          >
            <div className="flex items-center gap-2">
              <Form.Item
                {...field}
                validateTrigger={["onChange", "onBlur"]}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "Please input keyword or delete this field.",
                  },
                ]}
                noStyle
              >
                <Input placeholder="keyword..." className="w-full" />
              </Form.Item>
              {fields.length > 1 ? (
                <MinusCircleOutlined
                  className="flex-none"
                  onClick={() => remove(field.name)}
                />
              ) : null}
            </div>
          </Form.Item>
        ))}
        {fields.length <= 5 && (
          <Form.Item {...formItemLayoutWithOutLabel}>
            <button
              onClick={(event: MouseEvent) => {
                add();
                event.preventDefault();
                event.stopPropagation();
              }}
              className={cn(
                buttonVariants({
                  variant: "outline",
                })
              )}
            >
              <Icons.add className="mr-2 h-4 w-4" />
              Add keyword
            </button>
          </Form.Item>
        )}
      </>
    )}
  </Form.List>
);

export default DynamicKeywordInput;
