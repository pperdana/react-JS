import styled from "styled-components";

const Text = ({ name, job, text }) => {
  return (
    <TextBox>
      <h1 className="title">{name}</h1>
      <span className="job">{job}</span>
      <p className="info">{text}</p>
    </TextBox>
  );
};

export default Text;

const TextBox = styled.div`
  margin-bottom: 1.6rem;

  .title {
    line-height: 25px;

    font-weight: 400;
    font-size: 25px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: #0f172a;
  }

  .job {
    display: inline-block;
    margin-bottom: 1.2rem;

    font-weight: 500;
    font-size: 13px;
    line-height: 13px;

    letter-spacing: 1px;
    text-transform: uppercase;

    color: #645cff;
  }

  .info {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    text-align: center;

    color: #475569;
  }
`;
