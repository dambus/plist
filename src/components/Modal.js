export default function Modal({
  open,
  onClose,
  btnContent,
  onAddItem,
  children,
}) {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} className="overlay">
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          {children}
          <button className="close-modal" onClick={onClose}>
            {btnContent}
          </button>
        </div>
      </div>
    </>
  );
}
