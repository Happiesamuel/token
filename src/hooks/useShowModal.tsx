import { useEffect, useState } from "react";

export default function useShowModal() {
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);
  return { showModal, setShowModal };
}
