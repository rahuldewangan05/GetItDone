import moment from "moment";
import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="p-4 transition-all ease-in-out bg-white border rounded hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>
        {/* Pin Icon */}
        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-primary" : "text-slate-300"}`}
          onClick={onPinNote}
        />
      </div>
      {/* content */}
      <p className="mt-2 text-xs text-slate-600">{content?.slice(0, 60)}</p>
      <div className="flex items-center justify-between mt-2">
        {/* tags */}
        <div className="text-xs text-slate-500">
          {tags.map((item) => `#${item}`)}
        </div>
        {/* div for edit/delte */}
        <div className="flex items-center gap-2">
          {/* edit icon */}
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          {/* delete icon */}
          <MdDelete
            className="icon-btn hover:text-red-600"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
