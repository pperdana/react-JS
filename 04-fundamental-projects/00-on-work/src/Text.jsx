const Text = ({ name, job, text }) => {
  return (
    <div className="text-box">
      <h1 className="title">{name}</h1>
      <span className="job">{job}</span>
      <p className="info">{text}</p>
    </div>
  );
};

export default Text;
