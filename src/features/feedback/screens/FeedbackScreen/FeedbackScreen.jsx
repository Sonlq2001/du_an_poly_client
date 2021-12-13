import React, { useState } from 'react';
import { MdTagFaces } from 'react-icons/md';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import { WrapForm } from './FeedbackScreen.styles';
import InputElement from 'components/FormElement/InputElement/InputElement';
import TextareaElement from 'components/FormElement/TextareaElement/TextareaElement';
import { schema, initForm } from './../../helpers/feedback.helpers';
import { postFeedback } from './../../redux/feedback.slice';

const FeedbackScreen = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <Breadcrumb position="Phản hồi" />
      <div className="container">
        <Formik
          validationSchema={schema}
          initialValues={initForm}
          onSubmit={async (values, { resetForm }) => {
            setIsLoading(true);
            setIsDisabled(true);
            const response = await dispatch(postFeedback(values));
            if (postFeedback.fulfilled.match(response)) {
              toast.success('Gửi phản hồi thành công !');
            } else {
              toast.error('Đã xảy ra sự cố, vui lòng gửi lại sau !');
            }
            setIsLoading(false);
            setIsDisabled(false);
            resetForm();
          }}
        >
          {({ values }) => {
            const isValidForm =
              values?.name && values?.email && values?.content;
            return (
              <WrapForm>
                <h3 className="title-form">
                  Phản hồi của bạn
                  <span className="icon-form">
                    <MdTagFaces />
                  </span>
                </h3>
                <Form>
                  <InputElement
                    type="text"
                    name="name"
                    label="Họ và tên"
                    labelBlock
                    placeholder="Họ và tên"
                  />
                  <InputElement
                    type="text"
                    name="email"
                    label="Email"
                    labelBlock
                    placeholder="Địa chỉ email"
                  />
                  <TextareaElement
                    name="content"
                    placeholder="Nội dung phản hồi"
                    label="Nội dung"
                    labelBlock
                  />
                  <div className="group-from">
                    <button
                      className="btn-form"
                      type="submit"
                      disabled={!isValidForm || isDisabled}
                    >
                      {isLoading && isDisabled && (
                        <div className="loader"></div>
                      )}
                      Gửi phản hồi
                    </button>
                  </div>
                </Form>
              </WrapForm>
            );
          }}
        </Formik>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1300}
        className="message-alert"
      />
    </>
  );
};

export default FeedbackScreen;
