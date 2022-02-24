import CardContainer from "../components/cardsContainer/CardContainer";
import { useState, useEffect } from "react";
import LoadingHome from "../components/LoadingSpinner/LoadingHome";
import { Box } from "@mui/material";
import SeasonsNavigation from "../components/NavigationBars/SeasonsNavigation";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [isSeason, setSeason] = useState("SPRING");

  function getSelectedSeason() {
    console.log("blablabla");
  }

  function getCurrentSeason() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();

    if (day >= 1 && (month >= 2 || month <= 4)) {
      setSeason("SPRING");
    } else if (day >= 1 && (month >= 5 || month <= 7)) {
      setSeason("SUMMER");
    } else if (day >= 1 && (month >= 8 || month <= 11)) {
      setSeason("FALL");
    } else {
      setSeason("WINTER");
    }
  }
  var season = isSeason;
  var query = `
  {
    Page(page: 1, perPage: 40) {

      media(season: ${season}, type: ANIME, status: NOT_YET_RELEASED, format:TV) {
        id
        coverImage{
          large
        }
        title {
          romaji
        }
        genres
        description
        source
      }
    }
  }
  `;

  var url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    };
  useEffect(() => {
    getCurrentSeason();
    setIsLoading(true);
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const items = [];

        for (const [key, value] of Object.entries(
          data["data"]["Page"]["media"]
        )) {
          const item = {
            id: key,
            ...value,
          };
          items.push(item);
        }
        setIsLoading(false);
        setLoadedData(items);
      });
  }, []);

  if (loadedData.length === 0) {
    return <LoadingHome />;
  }
  return (
    <Box>
      <SeasonsNavigation />
      <CardContainer title="TV series to be aired" list={loadedData} />
    </Box>
  );
}
export default HomePage;
