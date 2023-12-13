import Upload from "@/components/dashboard/upload-images/upload";

export default function Dashboard() {

  return (
    <div className="flex m-5">
      <Upload type={'galeria'}/>
      <Upload type={'portada'}/>
      
    </div>
  );
}


