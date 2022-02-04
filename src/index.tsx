import { ActionPanel, ActionPanelItem, closeMainWindow, List, popToRoot } from "@raycast/api";
import { execSync } from "child_process";

export default function Command() {
  return (
    <List>
      {pages.map((page) => (
        <List.Item
          key={page}
          title={page}
          icon="icon.png"
          actions={
            <ActionPanel>
              <ActionPanelItem
                title={`Open in Simulator`}
                onAction={async () => {
                  execSync(`export PATH="$PATH:"/usr/local/ && artsy open ${page}`);
                  closeMainWindow();
                  popToRoot({ clearSearchBar: true });
                }}
              />
              <ActionPanelItem
                title={`Open in Emulator`}
                onAction={async () => {
                  execSync(`export PATH="$PATH:"/usr/local/ && artsy open ${page} -a`);
                  closeMainWindow();
                  popToRoot({ clearSearchBar: true });
                }}
              />
              <ActionPanelItem
                title={`Open in Browser (Production)`}
                onAction={async () => {
                  execSync(`export PATH="$PATH:"/usr/local/ && artsy open ${page} -w -p`);
                  closeMainWindow();
                  popToRoot({ clearSearchBar: true });
                }}
              />
              <ActionPanelItem
                title={`Open in Browser (Staging)`}
                onAction={async () => {
                  execSync(`export PATH="$PATH:"/usr/local/ && artsy open ${page} -w -s`);
                  closeMainWindow();
                  popToRoot({ clearSearchBar: true });
                }}
              />
              <ActionPanelItem
                title={`Open in Browser (Dev)`}
                onAction={async () => {
                  execSync(`export PATH="$PATH:"/usr/local/ && artsy open ${page} -w -l`);
                  closeMainWindow();
                  popToRoot({ clearSearchBar: true });
                }}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}

const pages = [
  "about",
  "admin",
  "admin2",
  "artist",
  "artist-articles",
  "artist-series",
  "artwork",
  "artwork-attribution-class-faq",
  "artwork-medium",
  "auction",
  "auction-bid-artwork",
  "auction-faq",
  "auction-info",
  "auction-registration",
  "auction-result",
  "auction2",
  "auctions",
  " buy-now-feature-faq",
  "categories",
  "checkout",
  "city-bmwlist",
  "city-fair-list",
  "city-saved-list",
  "city-section-list",
  "collection",
  "conditions-of-sale",
  "consignments-submission-form",
  "conversation",
  "fair",
  "fair-all-followed-artists",
  "fair-articles",
  " fair-bmwart-activation",
  "fair-more-info",
  "favorites",
  "feature",
  "full-artist-series-list",
  "full-featured-artist-list",
  "gene",
  "home",
  "identity-verification-faq",
  "inbox",
  "inquiry",
  "local-discovery",
  "make-offer-modal",
  "my-account",
  "my-account-edit-email",
  " my-account-edit-name",
  "my-account-edit-password",
  "my-account-edit-phone",
  "my-collection",
  "my-collection-artwork",
  "my-collection-artwork-full-details",
  "my-collection-artwork-images",
  "my-profile",
  "my-profile-payment",
  "my-profile-payment-new-credit-card",
  " my-profile-push-notifications",
  "order",
  "partner-locations",
  "privacy",
  "privacy-request",
  "sales",
  "sales-not-root-tab-view",
  "search",
  "show",
  "show-more-info",
  "terms",
  "viewing-room",
  "viewing-room-artwork",
  "viewing-room-artworks",
  "viewing-rooms",
  "works-for-you",
  "auction-results",
];
