package lt.itakademija.electors.results.reports.dto;

import lt.itakademija.electors.party.PartyEntity;
import lt.itakademija.electors.party.PartyReport;
import lt.itakademija.electors.results.multi.rating.RatingEntity;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * Created by Pavel on 2017-02-13.
 */
public class PartyIntDTO {
    private PartyReport par;
    private Integer votes;
    private List<CandidateIntDTO> ratings;

    public PartyIntDTO() {
    }

    public PartyIntDTO(PartyEntity par, Integer count, List<RatingEntity> ratingsEnt) {
        this.par = new PartyReport(par);
        this.votes = count;
        this.ratings = ratingsEnt.stream().map(r -> new CandidateIntDTO(r.getCandidate(),r.getPoints())).collect(Collectors.toList());
    }

    public PartyIntDTO(PartyReport par, Integer multiGetMandates) {
        this.par = par;
        this.votes = multiGetMandates;
    }


    public List<CandidateIntDTO> getRatings() {
        return ratings;
    }

    public void setRatings(List<CandidateIntDTO> ratings) {
        this.ratings = ratings;
    }

    public PartyReport getPar() {
        return par;
    }

    public void setPar(PartyReport par) {
        this.par = par;
    }

    public Integer getVotes() {
        return votes;
    }

    public void setVotes(Integer votes) {
        this.votes = votes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PartyIntDTO that = (PartyIntDTO) o;
        return Objects.equals(par, that.par) &&
                Objects.equals(votes, that.votes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(par, votes);
    }
}
