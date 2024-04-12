import { Modal } from "antd";

/**
 * Displays a modal with a success message.
 *
 * @param {string} title - The title of the modal.
 * @param {string|React.ReactNode} content - The content to display in the modal. Can be a simple string or a React component.
 * @param {Function} [handleOk=() => null] - The function to execute when the OK button is clicked. Defaults to simply dismissing the modal if not provided.
 * @example
 * success('Success', 'The operation was successful.', () => console.log('Modal closed'));
 *
 * @example
 * // With JSX content and no special onOk behavior:
 * success('Profile Update', <div>Your profile was updated successfully.</div>);
 */
export const success = (title, content, handleOk) => {
  Modal.success({
    title: title,
    content: content,
    onOk: handleOk,
  });
};

/**
 * Displays a modal with an error message.
 *
 * @param {string} title - The title of the modal.
 * @param {string|React.ReactNode} content - The content to display in the modal. Can be a simple string or a React component.
 * @param {Function} [handleOk=() => null] - The function to execute when the OK button is clicked. Defaults to simply dismissing the modal if not provided.
 * @example
 * error('Error', 'The operation failed.', () => console.log('Modal closed'));
 *
 * @example
 * // With JSX content and no special onOk behavior:
 * error('Profile Update', <div>The operation failed.</div>);
 */
export const error = (title, content, handleOk) => {
  Modal.error({
    title: title,
    content: content,
    onOk: handleOk,
  });
};
