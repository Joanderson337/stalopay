import { LoadingContainer } from "./styled";
import GridLoader from "react-spinners/GridLoader";

export function Loading(){
  return(
    <LoadingContainer>
      <GridLoader color="white" />
    </LoadingContainer>
  )
}
