import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function CarouselItem({ data }) {
  return (
    <Card className="pt-2 px-2 w-5/6 mx-auto rounded-none shadow-lg">
      <div color="blue-gray" className="relative rounded-none">
        <img src={data.image_url} alt="card-image" />
      </div>
      <div className="py-3 pl-2">
        <Typography
          variant="h5"
          color="blue-gray"
          className="font-boilingBlack"
        >
          {data.collection_name}
        </Typography>
        <Typography className="font-poppins">
          {data.collection_description}
        </Typography>
      </div>
    </Card>
  );
}
