import Upload from "@/components/dashboard/upload/upload";

export default function Dashboard() {


  return (
    <div className="flex m-5">
      <Upload type={'gallery'}/>
      <Upload type={'front-page'}/>
    </div>
  );
}


